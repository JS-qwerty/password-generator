import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { generatePassword, calculateStrength } from "@/lib/password";
import { Copy, RefreshCw } from "lucide-react";

const PasswordGenerator = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [length, setLength] = useState([12]);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const handleGenerate = () => {
    const newPassword = generatePassword(length[0], options);
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Copied!",
      description: "Password copied to clipboard",
    });
  };

  const strength = calculateStrength(password, options);
  const getStrengthColor = () => {
    if (strength < 25) return "bg-red-500";
    if (strength < 50) return "bg-orange-500";
    if (strength < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Password Generator</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
        <div className="flex items-center gap-2">
          {password ? (
            <code className="font-mono text-lg text-gray-900 flex-1 overflow-x-auto">
              {password}
            </code>
          ) : (
            <span className="text-gray-500 text-lg flex-1">
              Click Generate Password
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="hover:bg-gray-100"
            disabled={!password}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-2 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className={`h-full ${getStrengthColor()} transition-all duration-300`}
            style={{ width: `${strength}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-gray-700 text-sm">Password Length: {length[0]}</label>
          <Slider
            value={length}
            onValueChange={setLength}
            max={32}
            min={8}
            step={1}
            className="py-4"
          />
        </div>

        <div className="space-y-3">
          {Object.entries(options).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <label className="text-gray-700 capitalize">{key}</label>
              <Switch
                checked={value}
                onCheckedChange={(checked) =>
                  setOptions((prev) => ({ ...prev, [key]: checked }))
                }
              />
            </div>
          ))}
        </div>

        <Button
          className="w-full"
          onClick={handleGenerate}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Generate Password
        </Button>
      </div>
    </div>
  );
};

export default PasswordGenerator;