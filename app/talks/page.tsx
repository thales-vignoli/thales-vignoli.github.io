export default function TalksPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Talks</h1>
      <div className="grid gap-6">
        {/* Add your talks here */}
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Example Talk Title</h2>
          <p className="text-muted-foreground mb-4">Conference Name, Location - 2023</p>
          <p className="text-muted-foreground">Description of the talk...</p>
        </div>
      </div>
    </div>
  )
}

