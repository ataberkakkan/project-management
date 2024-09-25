"use client";

import { useGetTeamsQuery } from "@/state/api";
import { useAppSelector } from "../redux";
import Header from "@/components/Header";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer className="toolbar flex gap-5">
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 150 },
  { field: "productOwnerUsername", headerName: "ProductOwner", width: 150 },
  {
    field: "projectManagerUsername",
    headerName: "Project Manager",
    width: 150,
  },
];

const Teams = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const { data: teams, isLoading, error } = useGetTeamsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !teams) {
    return <div>Error fetching teams</div>;
  }

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Teams" />

      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={teams || []}
          columns={columns}
          pagination
          slots={{
            toolbar: CustomToolbar,
          }}
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};
export default Teams;
