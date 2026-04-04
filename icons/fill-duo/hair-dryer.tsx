import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HairDryer({
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
          d="M12.5 9.57057C11.787 9.88731 10.8205 10.1821 10.0891 10.4532C8.74943 10.9498 7.00638 11.5 5.75 11.5C3.12679 11.5 1 9.37321 1 6.75C1 4.12679 3.12679 2 5.75 2C7.00638 2 8.74943 2.55019 10.0891 3.04676C10.8201 3.31776 11.7863 3.6124 12.4989 3.92893L15.2488 2.61913C16.077 2.25569 17 2.86572 17 3.76401V9.73501C17 10.6356 16.0757 11.2429 15.2486 10.8798L12.5 9.57057Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.75 8C6.44 8 7 7.4404 7 6.75C7 6.0596 6.44 5.5 5.75 5.5C5.06 5.5 4.5 6.0596 4.5 6.75C4.5 7.4404 5.06 8 5.75 8Z"
          fill={fill}
        />
        <path
          d="M12.5 9.57057L15.2486 10.8798C16.0757 11.2429 17 10.6356 17 9.73501V3.76401C17 2.86572 16.077 2.25569 15.2488 2.61913L12.5 3.9284V9.57057Z"
          fill={fill}
        />
        <path
          d="M4.26978 11.2648L5.46679 15.5403C5.71045 16.4112 6.57766 16.9508 7.46525 16.79L8.01234 16.6937C8.92924 16.5272 9.55554 15.6701 9.43479 14.7456L8.92731 10.8572C8.4308 11.0173 7.91638 11.1651 7.41679 11.2785C7.27464 11.312 7.13444 11.3414 6.99514 11.3664C6.55211 11.45 6.12893 11.5 5.75002 11.5C5.23318 11.5 4.73561 11.4174 4.26978 11.2648Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HairDryer;
