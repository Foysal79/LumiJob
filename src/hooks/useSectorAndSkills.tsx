import { useEffect, useState } from "react";

type Sector = { _id: string; sectorType: string };
type Skill = { _id: string; skill: string };

const useSectorAndSkills = () => {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [sectorRes, skillRes] = await Promise.all([
        fetch("/sectors.json"),
        fetch("/skills.json"),
      ]);

      const sectorData = await sectorRes.json();
      const skillData = await skillRes.json();

      setSectors(sectorData);
      setSkills(skillData);
    } catch (error) {
      console.log("Failed to load JSON data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔁 React Query refetch equivalent
  const refetch = () => {
    fetchData();
  };

  return { sectors, skills, loading, refetch };
};

export default useSectorAndSkills;
