// app/menu/page.tsx
export default function Menu() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Our Menu</h1>

      {/* Link to the PDF Document */}
      <div className="text-center mb-8">
        <a href="public\GB Caterers & Decorators Menu.pdf" className="text-blue-500 hover:underline">
          Download our Menu (PDF)
        </a>

      </div>


    </div>
  );
}
