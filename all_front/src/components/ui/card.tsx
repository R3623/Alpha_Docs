import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode };

export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div className={`${className} rounded-lg border bg-white p-4 shadow`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...rest }: CardProps) {
  return (
    <div className={`${className} p-4`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...rest }: CardProps) {
  return (
    <div className={`${className} border-b p-4 font-bold`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...rest }: React.HTMLAttributes<HTMLHeadingElement> & { children: React.ReactNode }) {
  return (
    <h2 className={`${className} text-xl font-semibold`.trim()} {...rest}>
      {children}
    </h2>
  );
}
