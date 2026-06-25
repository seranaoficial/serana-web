import { supabase, isSupabaseConfigured } from '../supabase';

export type CustomerProfile = {
  id: string;
  auth_user_id: string | null;
  full_name: string;
  phone: string;
  email: string | null;
  address: string | null;
  loyalty_points: number;
  segment: string;
  total_orders: number;
  lifetime_value: number;
  last_order_at: string | null;
  membership_id: string | null;
  membership_status: string | null;
  membership_plan_name: string | null;
  membership_plan_code: string | null;
  membership_starts_on: string | null;
  membership_ends_on: string | null;
  membership_days_remaining: number;
};

export type CustomerMembership = {
  id: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  plan_name: string;
  plan_code: string;
  order_id: string | null;
  order_number: number | null;
  status: string;
  starts_on: string;
  ends_on: string;
  days_remaining: number;
  cancelled_at: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type CustomerOrderSummary = {
  order_id: string;
  order_number: number;
  status: string;
  type: string;
  payment_status: string;
  payment_method: string | null;
  total_amount: number;
  created_at: string;
  item_count: number;
  item_summary: Array<{
    product_id: string;
    product_name: string;
    quantity: number;
    unit_price: number;
    customizations?: string | null;
  }> | null;
};

export type CustomerAccount = {
  profile: CustomerProfile | null;
  membership: CustomerMembership | null;
  orders: CustomerOrderSummary[];
};

export type CustomerProfileInput = {
  full_name: string;
  phone: string;
  default_address?: string;
};

const emptyAccount: CustomerAccount = {
  profile: null,
  membership: null,
  orders: [],
};

export async function getMyCustomerAccount(): Promise<CustomerAccount> {
  if (!isSupabaseConfigured) return emptyAccount;

  const { data, error } = await supabase.rpc('get_my_customer_account');
  if (error) throw error;

  const account = (data ?? emptyAccount) as CustomerAccount;
  return {
    profile: account.profile ?? null,
    membership: account.membership ?? null,
    orders: Array.isArray(account.orders) ? account.orders : [],
  };
}

export async function upsertMyCustomerProfile(input: CustomerProfileInput): Promise<CustomerAccount> {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase no está configurado en este entorno.');
  }

  const { data, error } = await supabase.rpc('upsert_my_customer_profile', {
    payload: {
      full_name: input.full_name,
      phone: input.phone,
      default_address: input.default_address,
    },
  });
  if (error) throw error;

  const account = (data ?? emptyAccount) as CustomerAccount;
  return {
    profile: account.profile ?? null,
    membership: account.membership ?? null,
    orders: Array.isArray(account.orders) ? account.orders : [],
  };
}
