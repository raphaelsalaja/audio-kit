import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CursorRays({
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
          d="M11.5007 11.5007C11.7936 11.2078 12.2684 11.2078 12.5613 11.5007L16.7733 15.7127C17.0662 16.0056 17.0662 16.4804 16.7733 16.7733C16.4804 17.0662 16.0056 17.0662 15.7127 16.7733L11.5007 12.5613C11.2078 12.2684 11.2078 11.7936 11.5007 11.5007Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.06879 8.33887C6.79566 7.54551 7.55722 6.80157 8.33751 7.06696C8.35202 7.07189 8.36632 7.07725 8.38039 7.08301L15.6519 9.57843C16.5395 9.88278 16.5566 11.1308 15.68 11.46L12.6132 12.6132L11.4593 15.6818C11.1297 16.5516 9.88448 16.5445 9.57862 15.6524L7.06879 8.33887Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 1C8.16421 1 8.5 1.33579 8.5 1.75V3.75C8.5 4.16421 8.16421 4.5 7.75 4.5C7.33579 4.5 7 4.16421 7 3.75V1.75C7 1.33579 7.33579 1 7.75 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.5233 2.97666C12.8162 3.26955 12.8162 3.74442 12.5233 4.03732L11.1083 5.45233C10.8154 5.74522 10.3406 5.74522 10.0477 5.45233C9.75478 5.15944 9.75478 4.68456 10.0477 4.39167L11.4627 2.97666C11.7556 2.68377 12.2304 2.68376 12.5233 2.97666Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.45234 10.0477C5.74523 10.3406 5.74523 10.8154 5.45234 11.1083L4.03735 12.5233C3.74446 12.8162 3.26959 12.8162 2.97669 12.5233C2.6838 12.2304 2.68379 11.7556 2.97669 11.4627L4.39168 10.0477C4.68457 9.75478 5.15944 9.75478 5.45234 10.0477Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 7.75C1 7.33579 1.33579 7 1.75 7H3.75C4.16421 7 4.5 7.33579 4.5 7.75C4.5 8.16421 4.16421 8.5 3.75 8.5H1.75C1.33579 8.5 1 8.16421 1 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.97669 2.97665C3.26959 2.68376 3.74446 2.68377 4.03735 2.97666L5.45234 4.39167C5.74523 4.68457 5.74523 5.15944 5.45234 5.45233C5.15944 5.74522 4.68457 5.74522 4.39168 5.45232L2.97669 4.03731C2.68379 3.74442 2.6838 3.26955 2.97669 2.97665Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CursorRays;
