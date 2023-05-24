import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
import { Empty } from 'antd';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <Empty
        imageStyle={{ height: 100 }}
        description={
          <>
          <p>Sorry, an unexpected error has occurred.</p>
          <span>
            {error.statusText || error.data.message}
          </span>
          <p>{error.data?.message && <p>{error.data.message}</p>}</p>
          </>
        }
      >
      </Empty>
    );
  } else {
    return <Empty
      imageStyle={{ height: 100 }}
      description={
        <span>
          <span>Oops</span>
        </span>
      }
    >
    </Empty>;
  }
}