import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
import { Button, Empty, Result } from 'antd';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button href="/home" type="primary">Back Home</Button>}
      />
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