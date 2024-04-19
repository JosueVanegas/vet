import EmployeeForm from "@/components/admin/EmployeeForm";

const Page = ({ params }: { params }) => {
  return <EmployeeForm id={params.id}></EmployeeForm>;
};

export default Page;
