import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneSlash({
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
          d="M5.18429 2.03725C5.65779 1.91445 6.15073 2.15265 6.34933 2.59975L7.62374 5.46889C7.81078 5.89014 7.68583 6.38446 7.32101 6.66615L6.18234 7.54506C6.70126 8.42853 7.32871 9.23846 8.04757 9.95717C8.07058 9.98018 8.09469 10.0027 8.11788 10.0255L6.13839 11.9679C6.12149 11.9512 6.10346 11.9349 6.08663 11.9181C3.93121 9.76255 2.45945 6.92322 2.01437 3.74428C1.94575 3.25243 2.27691 2.79198 2.75753 2.66713L5.18429 2.03725Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.3396 10.6847C11.6212 10.3198 12.1156 10.1949 12.5368 10.382L15.406 11.6554C15.853 11.854 16.0901 12.347 15.9675 12.8204L15.3386 15.2472C15.2139 15.7282 14.7526 16.0602 14.2605 15.9913C11.8644 15.6559 9.75954 14.6387 7.89691 13.2836L10.1352 11.0453C10.355 11.195 10.2296 11.6882 10.4597 11.8234L11.3396 10.6847Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.04529 9.9547C7.32629 9.2359 6.6985 8.4261 6.1795 7.5425L7.3183 6.6635C7.6832 6.3818 7.80829 5.88731 7.62119 5.46601L6.34689 2.5969C6.14829 2.1498 5.65538 1.91201 5.18188 2.03481L2.7551 2.66431C2.2742 2.78911 1.94291 3.24991 2.01181 3.74201C2.45691 6.92111 3.92869 9.7601 6.08429 11.9157"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.42859 13.8136C10.1501 14.9307 12.1277 15.69 14.2579 15.9882C14.75 16.0571 15.2109 15.7259 15.3356 15.2449L15.9651 12.8181C16.0879 12.3446 15.8501 11.8517 15.403 11.6531L12.5339 10.3788C12.1126 10.1917 11.618 10.3168 11.3364 10.6817L10.4574 11.8205"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PhoneSlash;
