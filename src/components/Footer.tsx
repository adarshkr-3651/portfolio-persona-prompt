
const Footer = () => {
  return (
    <footer className="py-8 border-t border-red-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © 2024 [Your Name]. All rights reserved.
          </div>
          <div className="text-muted-foreground">
            Built with ❤️ using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
