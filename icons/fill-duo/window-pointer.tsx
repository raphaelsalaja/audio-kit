import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowPointer({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M17.0001 10.5205L11.8884 8.6532C9.90227 7.94296 7.92774 9.86636 8.64764 11.8856L10.1507 16H3.75006C2.23136 16 1.00006 14.7686 1.00006 13.25V7H17.0001V10.5205Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.0605 11.3819C9.77093 10.5695 10.574 9.7762 11.3833 10.0656L17.3221 12.2351C18.244 12.5691 18.2194 13.8877 17.2823 14.1846L14.9326 14.9364L14.1795 17.2913C13.8828 18.2069 12.5724 18.2599 12.2324 17.3269"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.2501 2H3.75006C2.23346 2 1.00006 3.2334 1.00006 4.75V7H17.0001V4.75C17.0001 3.2334 15.7667 2 14.2501 2ZM3.50006 5.5C2.94776 5.5 2.50006 5.0522 2.50006 4.5C2.50006 3.9478 2.94776 3.5 3.50006 3.5C4.05236 3.5 4.50006 3.9478 4.50006 4.5C4.50006 5.0522 4.05226 5.5 3.50006 5.5ZM6.50006 5.5C5.94776 5.5 5.50006 5.0522 5.50006 4.5C5.50006 3.9478 5.94776 3.5 6.50006 3.5C7.05236 3.5 7.50006 3.9478 7.50006 4.5C7.50006 5.0522 7.05226 5.5 6.50006 5.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowPointer;
