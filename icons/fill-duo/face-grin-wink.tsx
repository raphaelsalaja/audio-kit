import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceGrinWink({
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
          d="M6 9.0007C6.552 9.0007 7 8.553 7 8.0007C7 7.4484 6.552 7.0007 6 7.0007C5.448 7.0007 5 7.4484 5 8.0007C5 8.553 5.448 9.0007 6 9.0007Z"
          fill={fill}
        />
        <path
          d="M10.0005 9.0007C9.77389 9.0007 9.55029 8.8986 9.40279 8.7043C9.15229 8.3747 9.21629 7.904 9.54639 7.6535C9.83599 7.4338 10.4722 7.072 11.2925 7.0788C12.0957 7.091 12.6782 7.444 12.9536 7.6535C13.2837 7.904 13.3476 8.3742 13.0972 8.7043C12.8468 9.0344 12.3765 9.0983 12.0464 8.8479C11.917 8.7498 11.6445 8.5847 11.27 8.5789C10.8325 8.5965 10.563 8.7654 10.4536 8.8479C10.3179 8.9509 10.1587 9.0007 10.0005 9.0007Z"
          fill={fill}
        />
        <path
          d="M11.897 10.7577C11.743 10.6037 11.531 10.5367 11.314 10.5687C9.78198 10.8077 8.20198 10.8067 6.67598 10.5677C6.46198 10.5357 6.25499 10.6027 6.10399 10.7527C5.94999 10.9057 5.87698 11.1287 5.91098 11.3507C6.14098 12.8617 7.46899 14.0017 8.99999 14.0017C10.531 14.0017 11.86 12.8607 12.089 11.3477C12.122 11.1317 12.05 10.9107 11.897 10.7577Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceGrinWink;
