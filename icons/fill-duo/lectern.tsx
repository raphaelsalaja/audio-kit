import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lectern({
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
          d="m16.2993,8.5322l-1.3501-2.9995c-.2817-.6274-.9077-1.0327-1.5957-1.0327H4.6465c-.688,0-1.314.4053-1.5957,1.0322l-1.3501,2.9995c-.2446.5439-.1973,1.1675.1265,1.6685s.873.7998,1.4692.7998h11.4072c.5962,0,1.1455-.2988,1.4692-.7998s.3711-1.1245.1265-1.668Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4.6465,4.5h1.3535v-1.5845l1.6475-1.0293c.3511-.2197.458-.6826.2388-1.0337-.2202-.3511-.6831-.458-1.0337-.2388l-2,1.25c-.2192.1372-.3525.3774-.3525.6362v2.0215c.0496-.0044.0961-.0215.1465-.0215Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.25,15h-2.5v-4h-1.5v4h-2.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h6.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Lectern;
