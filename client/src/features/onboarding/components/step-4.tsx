import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Step4() {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/dashboard");
  };
  return (
    <Card className="mt-20 md:px-6! md:py-10! w-full!  md:max-w-2xl! mx-auto!">
      <CardHeader className="text-center">
        <CardTitle className="text-base md:text-2xl font-medium">
          You're all set 🎉
        </CardTitle>
      </CardHeader>

      <Button className="btn" onClick={handleContinue}>
        Finish Setup
      </Button>
    </Card>
  );
}
