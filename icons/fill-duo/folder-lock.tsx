import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderLock({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M13.5 12.25C13.5 11.8362 13.8362 11.5 14.25 11.5C14.6638 11.5 15 11.8362 15 12.25V13H13.5V12.25ZM12 13.0177V12.25C12 11.0078 13.0078 10 14.25 10C15.4922 10 16.5 11.0078 16.5 12.25V13.0177C17.3479 13.1391 18 13.8687 18 14.75V16.25C18 17.2162 17.2162 18 16.25 18H12.25C11.2838 18 10.5 17.2162 10.5 16.25V14.75C10.5 13.8687 11.1521 13.1391 12 13.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9V14.75C9 13.5957 9.60133 12.583 10.5078 12.0064C10.6333 10.0493 12.2612 8.5 14.25 8.5C15.0941 8.5 15.8732 8.77908 16.5 9.24999V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderLock;
