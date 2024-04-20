import VisitForm from "@/components/admin/VisitForm";

const UpdateVisitPage = ({ params }) => {
  return <VisitForm id={params.id}></VisitForm>;
};

export default UpdateVisitPage;
