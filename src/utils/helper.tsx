export function formatNumber(num: number): string {
    if (num >= 10000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; // For thousands
    }
    return num.toString();
}