import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import type { RootState } from "../redux/slices";
import CustomCard from "../components/common/Card";
import CustomPageTitle from "../components/common/PageTitle";
import CustomButton from "../components/common/Button";
import CustomEmptyMessage from "../components/common/EmptyMessage";
import CustomPagination from "../components/common/Pagination";
import PageLayout from "../components/layout/PageLayout";


const COLOR_MAP: Record<string, string> = {
  sold: "#4caf50",
  unsold: "#f44336",
  pending: "#ff9800",
  available: "#2196f3",
  notavailable: "#9e9e9e",
  peric: "#673ab7",
};

export default function InventoryDetailPage() {
  const { label } = useParams<{ label: string }>();
  const normalizedLabel = label?.toLowerCase() ?? "";

  // Lấy inventory từ Redux
  const { inventory } = useSelector((state: RootState) => state.inventory);

  // Số lượng bản ghi theo label
  const count = inventory?.[normalizedLabel as keyof typeof inventory] ?? 0;

  // Màu theo label
  const color = COLOR_MAP[normalizedLabel] ?? "#000";


  return (
    <PageLayout>
      <CustomPageTitle
        title="Inventory Pet Management Detail"
        subtitle={`Status Name – ${label}`}
      />

      <CustomButton
        sx={{
          borderRadius: 2,
          fontWeight: "bold",
          py: 1,
        }}
        to="/inventory"
      >
        Back
      </CustomButton>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        gutterBottom
        sx={{ mt: 2 }}
      >
        Total documents: {count}
      </Typography>

      {count > 0 ? (
        <CustomPagination
          totalCount={count}
          defaultPageSize={9}
          pageSizeOptions={[3, 6, 9]}
          columns={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          renderItem={(index) => (
            <CustomCard
              key={index}
              label={`${label} #${index + 1}`}
              value="This is the detail of the status about the pet."
              color={color}
            />
          )}
        />
      ) : (
        <CustomEmptyMessage
          message={`No inventory data of status ${label} available.`}
        />
      )}
    </PageLayout>
  );
}
