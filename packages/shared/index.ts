// User types
export type UserRole = 'admin' | 'coordinator' | 'seller';

export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthPayload {
  userId: number;
  email: string;
  role: UserRole;
}

// Region types
export interface Region {
  id: number;
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

// Coordinator types
export interface Coordinator {
  id: number;
  userId: number;
  regions: Region[];
  createdAt: Date;
  updatedAt: Date;
}

// Seller types
export interface Seller {
  id: number;
  userId: number;
  coordinatorId: number;
  createdAt: Date;
  updatedAt: Date;
}

// Company types
export type CompanyStatus = 'active' | 'inactive' | 'prospect';

export interface Company {
  id: number;
  name: string;
  cnpj?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  regionId: number;
  sellerId: number;
  coordinatorId: number;
  status: CompanyStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Product types
export interface Product {
  id: number;
  name: string;
  description?: string;
  sku: string;
  price: number; // in cents
  category?: string;
  stock: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Order types
export type OrderStatus = 'pending' | 'approved' | 'rejected' | 'completed';

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  unitPrice: number; // in cents
  totalPrice: number; // in cents
  createdAt: Date;
}

export interface Order {
  id: number;
  orderNumber: string;
  companyId: number;
  sellerId: number;
  coordinatorId: number;
  regionId: number;
  totalAmount: number; // in cents
  status: OrderStatus;
  notes?: string;
  items?: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

// Notification types
export type NotificationType = 'company_created' | 'order_created' | 'order_status_changed' | 'coordinator_assigned';

export interface Notification {
  id: number;
  userId: number;
  type: NotificationType;
  title: string;
  content?: string;
  read: boolean;
  relatedEntityId?: number;
  createdAt: Date;
}

// Forecast types
export interface Forecast {
  id: number;
  companyId: number;
  sellerId: number;
  coordinatorId: number;
  regionId: number;
  forecastedAmount: number; // in cents
  month: number; // 1-12
  year: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

// Dashboard metrics
export interface DashboardMetrics {
  totalCompanies: number;
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  forecastedRevenue: number;
  ordersByStatus: Record<OrderStatus, number>;
  revenueByRegion: Record<string, number>;
  topSellers?: Array<{ name: string; revenue: number; orders: number }>;
}
