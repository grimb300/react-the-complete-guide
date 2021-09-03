import { useRouter } from "next/router";

// ourdomain.com/news/<newsId>

function DetailsPage() {
  const router = useRouter();

  console.log(router.query.newsId);
  return (
    <div>
      <h1>The Details Page for:</h1>
      <code>ourdomain.com/news/{router.query.newsId}</code>
    </div>
  );
}

export default DetailsPage;
