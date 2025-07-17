
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center border-b border-gray-200 pb-6 mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">BOYA GEETHANJALI</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <span>+91 8019822928</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          <span>geethanjali2506@gmail.com</span>
        </div>
        <div className="flex items-center gap-1">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </div>
        <div className="flex items-center gap-1">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
