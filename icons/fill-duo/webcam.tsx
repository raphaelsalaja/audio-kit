import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Webcam({
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
          d="M2.5 7.5C2.5 3.90979 5.40979 1 9 1C12.5902 1 15.5 3.90979 15.5 7.5C15.5 11.0902 12.5902 14 9 14C5.40979 14 2.5 11.0902 2.5 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.40715 12.9178L4.30669 14.7184C3.69742 15.7172 4.41442 17 5.58699 17H12.412C13.5846 17 14.3014 15.717 13.6921 14.7182L12.593 12.9178C11.5638 13.6016 10.3285 14 9 14C7.67158 14 6.43632 13.6016 5.40715 12.9178Z"
          fill={fill}
        />
        <path
          d="M9 9.75C10.243 9.75 11.25 8.743 11.25 7.5C11.25 6.257 10.243 5.25 9 5.25C7.757 5.25 6.75 6.257 6.75 7.5C6.75 8.743 7.757 9.75 9 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Webcam;
