import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEnraged({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 13C7.222 12.254 8.054 11.758 9 11.758C9.946 11.758 10.778 12.254 11.25 13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 9.732C6.269 10.176 7.211 10.051 7.837 9.488C8.078 9.271 8.007 8.87 7.726 8.708L5.274 7.292C4.993 7.13 4.61 7.268 4.543 7.586C4.368 8.41 4.731 9.288 5.5 9.732Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 9.732C11.731 10.176 10.789 10.051 10.163 9.488C9.922 9.271 9.993 8.87 10.274 8.708L12.726 7.292C13.007 7.13 13.39 7.268 13.457 7.586C13.632 8.41 13.269 9.288 12.5 9.732Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceEnraged;
