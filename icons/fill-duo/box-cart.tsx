import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxCart({
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
          d="M6.5 5.25C6.5 4.00726 7.50792 3 8.75 3H12.75C13.9921 3 15 4.00726 15 5.25V9.25C15 10.4927 13.9921 11.5 12.75 11.5H8.75C7.50792 11.5 6.5 10.4927 6.5 9.25V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 3V6.25C11.5 6.66421 11.1642 7 10.75 7C10.3358 7 10 6.66421 10 6.25V3H11.5Z"
          fill={fill}
        />
        <path
          d="M5.11301 13.75C5.11301 13.3358 5.44879 13 5.86301 13H12.9211C13.3353 13 13.6711 13.3358 13.6711 13.75C13.6711 14.1642 13.3353 14.5 12.9211 14.5H5.86301C5.44879 14.5 5.11301 14.1642 5.11301 13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.08301 1.75C1.08301 1.33579 1.41879 1 1.83301 1H3.25C4.21621 1 5 1.78379 5 2.75V12.75C5 13.1642 4.66421 13.5 4.25 13.5C3.83578 13.5 3.5 13.1642 3.5 12.75V2.75C3.5 2.61221 3.38778 2.5 3.25 2.5H1.83301C1.41879 2.5 1.08301 2.16421 1.08301 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.75 14.5C1.75 13.1191 2.86993 12 4.25 12C5.63007 12 6.75 13.1191 6.75 14.5C6.75 15.8809 5.63007 17 4.25 17C2.86993 17 1.75 15.8809 1.75 14.5ZM4.25 13.5C3.69807 13.5 3.25 13.9479 3.25 14.5C3.25 15.0521 3.69807 15.5 4.25 15.5C4.80193 15.5 5.25 15.0521 5.25 14.5C5.25 13.9479 4.80193 13.5 4.25 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 14.5C12 13.1191 13.1199 12 14.5 12C15.8801 12 17 13.1191 17 14.5C17 15.8809 15.8801 17 14.5 17C13.1199 17 12 15.8809 12 14.5ZM14.5 13.5C13.9481 13.5 13.5 13.9479 13.5 14.5C13.5 15.0521 13.9481 15.5 14.5 15.5C15.0519 15.5 15.5 15.0521 15.5 14.5C15.5 13.9479 15.0519 13.5 14.5 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxCart;
