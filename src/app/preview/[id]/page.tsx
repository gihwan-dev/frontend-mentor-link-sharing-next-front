interface PreviewPageParams {
  params: {
    id: string;
  };
}

const PreviewPage: React.FC<PreviewPageParams> = ({ params }) => {
  return (
    <div>
      <h1>{params.id} Preview Page.</h1>
    </div>
  );
};

export default PreviewPage;
