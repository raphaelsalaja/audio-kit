import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shapes({
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
          d="M9.5 6C9.5 3.79079 11.2908 2 13.5 2C15.7092 2 17.5 3.79079 17.5 6C17.5 8.20921 15.7092 10 13.5 10C11.2908 10 9.5 8.20921 9.5 6Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M4 11.75C4 10.7838 4.78379 10 5.75 10H9.25C10.2162 10 11 10.7838 11 11.75V15.25C11 16.2162 10.2162 17 9.25 17H5.75C4.78379 17 4 16.2162 4 15.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.17008 1.61218C3.65248 0.784937 4.84752 0.784954 5.32988 1.61223L7.95885 6.12018C8.44348 6.95204 7.84493 8.00002 6.87897 8.00002H1.62097C0.65499 8.00002 0.056293 6.95232 0.540926 6.12046L3.17008 1.61218Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Shapes;
