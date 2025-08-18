import { useState, useMemo, useEffect } from "react";
import { Box, Pagination, Select, MenuItem, Typography } from "@mui/material";
import CustomLoadingSpinner from "./LoadingSpinner";

interface CustomPaginationProps {
  totalCount: number;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  renderItem: (index: number) => React.ReactNode;
  columns?: { xs?: number; sm?: number; md?: number; lg?: number };
}

export default function CustomPagination({
  totalCount,
  defaultPageSize = 9,
  pageSizeOptions = [3, 6, 9],
  renderItem,
  columns = { xs: 1, sm: 2, md: 3, lg: 3 },
}: CustomPaginationProps) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);

  // Trigger loading mỗi khi page hoặc pageSize thay đổi
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [page, pageSize]);

  const currentRecords = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalCount);

    return Array.from({ length: endIndex - startIndex }, (_, i) =>
      renderItem(startIndex + i)
    );
  }, [page, totalCount, pageSize, renderItem]);

  return (
    <Box>
      {/* Bộ lọc số bản ghi */}
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2}>
        <Typography variant="body2" color="text.secondary" mr={1}>
          Show per page:
        </Typography>
        <Select
          size="small"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1); // reset về trang đầu
          }}
        >
          {pageSizeOptions.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Hiển thị Loading hoặc Grid */}
      {loading ? (
        <CustomLoadingSpinner />
      ) : (
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: `repeat(${columns.xs}, 1fr)`,
            sm: `repeat(${columns.sm}, 1fr)`,
            md: `repeat(${columns.md}, 1fr)`,
            lg: `repeat(${columns.lg}, 1fr)`,
          }}
          gap={2}
        >
          {currentRecords}
        </Box>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}
    </Box>
  );
}
