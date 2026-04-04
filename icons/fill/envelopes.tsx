import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Envelopes({
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
          d="M12.25 16H5.75C3.131 16 1 13.869 1 11.25V7.75C1 7.336 1.336 7 1.75 7C2.164 7 2.5 7.336 2.5 7.75V11.25C2.5 13.042 3.958 14.5 5.75 14.5H12.25C12.664 14.5 13 14.836 13 15.25C13 15.664 12.664 16 12.25 16Z"
          fill={secondaryfill}
        />
        <path
          d="M17 5.07092L11.6233 8.43257C11.564 8.4696 11.3648 8.60794 11.1633 8.69059C10.8166 8.83273 10.4354 8.85877 10.0764 8.76917C9.75294 8.68844 9.48367 8.49943 9.37677 8.43262L4 5.07189V10.75C4 11.9922 5.00779 13 6.25 13H14.75C15.9922 13 17 11.9922 17 10.75V5.07092Z"
          fill={fill}
        />
        <path
          d="M16.8357 3.40462C16.5013 2.58107 15.6933 2 14.75 2H6.25001C5.30643 2 4.49812 2.58147 4.164 3.40547L10.1718 7.16063C10.2368 7.20153 10.3009 7.24432 10.3682 7.28133C10.4137 7.30636 10.4337 7.31233 10.4396 7.3138C10.4909 7.3266 10.5454 7.32275 10.5942 7.30272C10.6399 7.284 10.6618 7.26465 10.8281 7.16068L16.8357 3.40462Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Envelopes;
