const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Dnyanesh Adkar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
