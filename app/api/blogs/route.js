export async function GET() {
  try {
    const username = "nakuldevmv";
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}&state=all`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
