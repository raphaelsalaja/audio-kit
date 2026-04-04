import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPanoramaView({
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
          d="M15.7617 1.33149C15.2993 1.00479 14.7036 0.923786 14.1714 1.11229C10.7407 2.33059 7.2608 2.33009 3.8281 1.11279C3.2954 0.925286 2.6997 1.00589 2.2378 1.33249C1.7759 1.65869 1.5 2.19139 1.5 2.75729V11.5019C1.5 12.0678 1.7759 12.601 2.2383 12.9272C2.7002 13.2534 3.2945 13.3339 3.8281 13.1464C7.2607 11.9296 10.7407 11.9291 14.1714 13.1469C14.3613 13.2138 14.5586 13.247 14.7549 13.247C15.1109 13.247 15.4639 13.1381 15.7617 12.9277C16.2241 12.6015 16.5 12.0683 16.5 11.5024V2.75679C16.5 2.19089 16.2241 1.65769 15.7617 1.33149Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 9.5C10.2426 9.5 11.25 8.49264 11.25 7.25C11.25 6.00736 10.2426 5 9 5C7.75736 5 6.75 6.00736 6.75 7.25C6.75 8.49264 7.75736 9.5 9 9.5Z"
          fill={fill}
        />
        <path
          d="M13.4624 14.5649C13.0073 12.499 11.1309 11 8.99998 11C6.86908 11 4.99268 12.499 4.53758 14.5654C4.35348 15.4038 4.87738 16.2622 5.73048 16.5195C6.79008 16.8383 7.89018 17 8.99998 17C10.1055 17 11.2051 16.8384 12.269 16.5195C13.123 16.2627 13.6469 15.4043 13.4624 14.5649Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserPanoramaView;
