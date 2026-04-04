import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextMinus({
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
          d="m14,9c-2.2056,0-4,1.7944-4,4s1.7944,4,4,4,4-1.7944,4-4-1.7944-4-4-4Zm1.75,4.75h-3.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.25,1.5H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v9.5c0,1.5166,1.2334,2.75,2.75,2.75h5.0107c-.787-.9517-1.2607-2.1714-1.2607-3.5,0-3.0327,2.4673-5.5,5.5-5.5.7061,0,1.3792.1387,2,.3821v-3.6321c0-1.5166-1.2334-2.75-2.75-2.75Zm-5.75,8.5h-2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.25c.4141,0,.75.3359.75.75s-.3359.75-.75.75Zm3.5-3h-5.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h5.75c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TextMinus;
