import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceGrin({
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
          d="M9 17.0007C4.5889 17.0007 1 13.4118 1 9.0007C1 4.5896 4.5889 1.0007 9 1.0007C13.4111 1.0007 17 4.5896 17 9.0007C17 13.4118 13.4111 17.0007 9 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6 9.0007C6.5523 9.0007 7 8.553 7 8.0007C7 7.4484 6.5523 7.0007 6 7.0007C5.4477 7.0007 5 7.4484 5 8.0007C5 8.553 5.4477 9.0007 6 9.0007Z"
          fill={fill}
        />
        <path
          d="M12 9.0007C12.5523 9.0007 13 8.553 13 8.0007C13 7.4484 12.5523 7.0007 12 7.0007C11.4477 7.0007 11 7.4484 11 8.0007C11 8.553 11.4477 9.0007 12 9.0007Z"
          fill={fill}
        />
        <path
          d="M11.897 10.7577C11.743 10.6037 11.531 10.5367 11.314 10.5687C9.78198 10.8077 8.20198 10.8067 6.67598 10.5677C6.46198 10.5357 6.25498 10.6027 6.10398 10.7527C5.94998 10.9057 5.87698 11.1287 5.91098 11.3507C6.14098 12.8617 7.46898 14.0017 8.99998 14.0017C10.531 14.0017 11.86 12.8607 12.089 11.3477C12.122 11.1317 12.05 10.9107 11.897 10.7577Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceGrin;
