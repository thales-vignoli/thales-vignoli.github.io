export default function PublicationsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Publications</h1>
      <div className="grid gap-6">
        {/* Add your publications here */}
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Example Publication Title</h2>
          <p className="text-muted-foreground mb-4">Journal Name, 2023</p>
          <p className="text-muted-foreground">Abstract or description of the publication...</p>
        </div>
      </div>
    </div>
  )
}

