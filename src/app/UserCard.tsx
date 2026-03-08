interface UserCardProps {
  name: string;
  role: string;
  age?: number; 
}

export default function UserCard({ name, role, age }: UserCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <p className="text-gray-400">Age: {age ?? "N/A"}</p>
    </div>
  );
}