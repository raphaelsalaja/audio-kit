import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinLock({
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
          d="M7.75 1C4.02195 1 1 4.02392 1 7.75C1 10.2465 2.22115 12.4149 3.58989 13.9916C4.27887 14.7854 5.02063 15.4477 5.6999 15.9477C6.36652 16.4385 7.0159 16.8047 7.52415 16.9652C7.67114 17.0116 7.82886 17.0116 7.97585 16.9652C8.32823 16.8539 8.74844 16.6438 9.19521 16.3618C9.0689 16.0149 9 15.6405 9 15.25V13.75C9 12.5957 9.60133 11.583 10.5078 11.0064C10.6333 9.04926 12.2612 7.5 14.25 7.5C14.3326 7.5 14.4145 7.50267 14.4957 7.50793C14.3682 3.89383 11.397 1 7.75 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.5 11.25C13.5 10.8362 13.8362 10.5 14.25 10.5C14.6638 10.5 15 10.8362 15 11.25V12H13.5V11.25ZM12 12.0177V11.25C12 10.0078 13.0078 9 14.25 9C15.4922 9 16.5 10.0078 16.5 11.25V12.0177C17.3479 12.1391 18 12.8687 18 13.75V15.25C18 16.2162 17.2162 17 16.25 17H12.25C11.2838 17 10.5 16.2162 10.5 15.25V13.75C10.5 12.8687 11.1521 12.1391 12 12.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 7.75C5 6.23193 6.23104 5 7.75 5C9.26896 5 10.5 6.23193 10.5 7.75C10.5 9.26807 9.26896 10.5 7.75 10.5C6.23104 10.5 5 9.26807 5 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinLock;
