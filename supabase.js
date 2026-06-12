/* ==========================================
   Wycst P 二手書市集 - Supabase 連線設定核心
   ========================================== */

// 你的專案專屬網址
const supabaseUrl = 'https://xapppgalhyfcjifxlxzp.supabase.co';

// 你的專案公開金鑰
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcHBwZ2FsaHlmY2ppZnhseHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNjI3ODUsImV4cCI6MjA5NjgzODc4NX0.skg-CIfWWxY06AJ2ofRL2WgfhdyF825BJCTSg1Fjtl8';

// 建立全域連線客戶端，供所有網頁共同呼叫
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);