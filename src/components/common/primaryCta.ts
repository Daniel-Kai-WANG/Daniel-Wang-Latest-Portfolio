export function getPrimaryCtaStyle(theme: 'light' | 'dark') {
  if (theme === 'light') {
    return {
      color: '#183559',
      background:
        'linear-gradient(135deg, rgba(255, 224, 178, 0.97), rgba(222, 241, 255, 0.97))',
      boxShadow: '0 14px 30px rgba(142, 188, 228, 0.22)',
    }
  }

  return {
    color: '#f8fbff',
    background:
      'linear-gradient(135deg, rgba(16, 45, 87, 0.98), rgba(28, 82, 132, 0.95), rgba(76, 94, 167, 0.92))',
    boxShadow: '0 18px 34px rgba(8, 20, 52, 0.34)',
  }
}
