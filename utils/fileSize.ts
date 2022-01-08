export const getFileSizeInMB = (bytes: number): string => {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}