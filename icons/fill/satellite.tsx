import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Satellite({
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
          d="M4.25 10C4.66421 10 5 10.3358 5 10.75C5 11.9928 6.00721 13 7.25 13C7.66421 13 8 13.3358 8 13.75C8 14.1642 7.66421 14.5 7.25 14.5C5.17879 14.5 3.5 12.8212 3.5 10.75C3.5 10.3358 3.83579 10 4.25 10Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.25 10C1.66421 10 2 10.3358 2 10.75C2 13.6498 4.35021 16 7.25 16C7.66421 16 8 16.3358 8 16.75C8 17.1642 7.66421 17.5 7.25 17.5C3.52179 17.5 0.5 14.4782 0.5 10.75C0.5 10.3358 0.835786 10 1.25 10Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.82391 1.99528L6.59201 0.763368C5.90892 0.0790358 4.79887 0.0787191 4.11598 0.763368L3.45226 1.48222C2.78201 2.16684 2.78659 3.26554 3.46465 3.94534L4.69861 5.17929C5.33897 5.81801 6.35164 5.85906 7.03878 5.29946L8.3773 6.63798L9.43796 5.57732L8.05211 4.19147C8.49749 3.51265 8.42131 2.59139 7.82391 1.99528Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.1633 8.30264L11.1026 9.3633L12.6878 10.9485C12.1283 11.6357 12.1699 12.649 12.8087 13.2893L14.0553 14.536C14.7351 15.2141 15.8332 15.218 16.5178 14.5477L17.2366 13.884C17.9213 13.2011 17.9211 12.0911 17.2366 11.408L15.992 10.1634C15.3959 9.56619 14.4746 9.48991 13.7958 9.93518L12.1633 8.30264Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.9176 1.46433C14.8541 0.713373 13.4526 0.986687 12.6157 1.82367L6.42734 8.01199C5.74256 8.69545 5.74328 9.80394 6.42666 10.4873L7.51198 11.5726C8.19542 12.2576 9.30387 12.2568 9.98732 11.5733L16.2533 5.30732C17.34 4.22058 17.2184 2.38177 15.9176 1.46433Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Satellite;
