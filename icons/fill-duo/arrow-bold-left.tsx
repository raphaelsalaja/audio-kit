import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeft({
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
          d="M15.25 5.99995H9.99997V4.00695C9.99997 3.52895 9.73397 3.09995 9.30597 2.88695C8.87897 2.67495 8.37597 2.72195 7.99497 3.01095L1.41397 8.00395C1.09997 8.24195 0.919983 8.60495 0.919983 8.99995C0.919983 9.39495 1.09997 9.75695 1.41397 9.99595L7.99497 14.9889C8.21797 15.1579 8.48196 15.2439 8.74896 15.2439C8.93696 15.2439 9.12897 15.2009 9.30597 15.1129C9.73497 14.8999 9.99997 14.4709 9.99997 13.9929V11.9999H15.25C16.215 11.9999 17 11.2149 17 10.2499V7.74995C17 6.78495 16.215 5.99995 15.25 5.99995Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldLeft;
