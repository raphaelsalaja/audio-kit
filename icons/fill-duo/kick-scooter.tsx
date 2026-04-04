import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KickScooter({
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
          d="M1 13.25C1 11.8699 2.11915 10.75 3.5 10.75C4.88085 10.75 6 11.8699 6 13.25C6 14.6301 4.88085 15.75 3.5 15.75C2.11915 15.75 1 14.6301 1 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.99896 2.75C8.99896 2.33579 9.33475 2 9.74896 2H11.691C12.5164 2 13.229 2.57578 13.4023 3.38252L14.4784 8.40301C14.5652 8.80802 14.3073 9.20673 13.9023 9.29354C13.4973 9.38036 13.0985 9.12241 13.0117 8.71739L11.9357 3.69746C11.9108 3.58235 11.8094 3.5 11.691 3.5H9.74896C9.33475 3.5 8.99896 3.16421 8.99896 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 13.25C12 11.8699 13.1191 10.75 14.5 10.75C15.8809 10.75 17 11.8699 17 13.25C17 14.6301 15.8809 15.75 14.5 15.75C13.1191 15.75 12 14.6301 12 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.50002 8C2.78329 8 2.09832 8.14407 1.47387 8.40563C1.09181 8.56566 0.911828 9.00511 1.07186 9.38716C1.23188 9.76921 1.67133 9.94919 2.05338 9.78917C2.49753 9.60313 2.98575 9.5 3.50002 9.5C5.57088 9.5 7.25002 11.1801 7.25002 13.25C7.25002 13.6642 7.58581 14 8.00002 14H12.1145C12.0401 13.7632 12 13.5113 12 13.25C12 12.9887 12.0401 12.7368 12.1145 12.5H8.69681C8.33276 9.9568 6.14481 8 3.50002 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default KickScooter;
