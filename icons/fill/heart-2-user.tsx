import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2User({
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
        <circle
          cx="13.25"
          cy="10.5"
          fill={secondaryfill}
          r="1.5"
          strokeWidth="0"
        />
        <path
          d="m8.543,14.8516c.4026-1.1575,1.2111-2.0842,2.224-2.6704-.3259-.48-.517-1.0586-.517-1.6812,0-1.6543,1.3457-3,3-3,1.2612,0,2.3383.7842,2.7812,1.8889.876-1.127,1.184-2.5962.8098-4.0239-.217-.8269-.693-1.5959-1.341-2.1631-1.111-.9749-2.56-1.3689-3.971-1.084-1.002.2031-1.882.718-2.532,1.4631-.039-.0439-.079-.0881-.12-.1321-1.734-1.825-4.631-1.8989-6.456-.167-.885.8401-1.389,1.9749-1.42,3.1941-.031,1.219.414,2.3779,1.258,3.2659l5.479,5.6941c.1904.1973.424.3279.6743.4158-.013-.3364.0172-.675.1307-1.0002Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.3511,17h-4.2021c-.4067,0-.7905-.1987-1.0273-.5317-.2324-.3276-.293-.7476-.1621-1.123.4883-1.4023,1.8105-2.3452,3.2905-2.3452s2.8022.9429,3.291,2.3457c.1304.375.0698.7949-.1626,1.1226-.2368.333-.6206.5317-1.0273.5317Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Heart2User;
