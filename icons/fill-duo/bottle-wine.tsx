import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BottleWine({
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
          d="M9 16.75C9 16.0366 9.3335 15.3999 9.853 14.9873C9.5849 14.7759 9.3384 14.5337 9.1167 14.2637C8.2158 13.1646 7.8569 11.7447 8.1313 10.3677L8.5439 8.3081C8.7164 7.449 9.3742 6.7908 10.1931 6.5789C9.8312 6.3543 9.4291 6.188 9 6.0938V3.5H5V6.0938C3.2852 6.4708 2 7.9942 2 9.8223V15.75C2 16.7166 2.7835 17.5 3.75 17.5H9.1382C9.0542 17.2642 9 17.0142 9 16.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.75 10H2V14.5H5.75C6.1642 14.5 6.5 14.1642 6.5 13.75V10.75C6.5 10.3358 6.1642 10 5.75 10Z"
          fill={fill}
        />
        <path
          d="M7.5 0.5H6.5C5.6716 0.5 5 1.1716 5 2V3.5H9V2C9 1.1716 8.3284 0.5 7.5 0.5Z"
          fill={fill}
        />
        <path
          d="M15.2236 13.312C15.8383 12.562 16.084 11.5962 15.8974 10.6606L15.4853 8.6025C15.415 8.2524 15.1074 8 14.7499 8H10.7499C10.3925 8 10.0849 8.2524 10.0145 8.6025L9.6024 10.6611C9.4159 11.5962 9.6615 12.562 10.2762 13.312C10.7291 13.8642 11.3351 14.2392 11.9998 14.4036V16H11.2498C10.8357 16 10.4998 16.3359 10.4998 16.75C10.4998 17.1641 10.8357 17.5 11.2498 17.5H14.2498C14.6639 17.5 14.9998 17.1641 14.9998 16.75C14.9998 16.3359 14.6639 16 14.2498 16H13.4998V14.4036C14.1645 14.2393 14.7707 13.8643 15.2236 13.312Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BottleWine;
