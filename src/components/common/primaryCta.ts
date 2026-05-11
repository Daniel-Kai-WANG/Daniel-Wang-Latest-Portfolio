export function getPrimaryCtaStyle(theme: 'light' | 'dark') {
  if (theme === 'light') {
    return {
      color: '#1f3b68',
      background: 'linear-gradient(90deg, #ffe1a8 0%, #f4ead9 46%, #d8eafb 100%)',
      boxShadow: '0 16px 34px rgba(176, 199, 223, 0.26)',
      border: '1px solid rgba(179, 205, 231, 0.72)',
    }
  }

  return {
    color: '#f8fbff',
    background:
      'linear-gradient(135deg, rgba(16, 45, 87, 0.98), rgba(28, 82, 132, 0.95), rgba(76, 94, 167, 0.92))',
    boxShadow: '0 18px 34px rgba(8, 20, 52, 0.34)',
  }
}
