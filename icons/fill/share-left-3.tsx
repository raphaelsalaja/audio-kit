import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareLeft3({
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
          d="M9,5.772V2.75c0-.294-.172-.561-.439-.683-.268-.121-.582-.077-.803,.117L1.257,7.851c-.162,.141-.256,.345-.257,.56s.089,.42,.249,.563l6.5,5.833c.221,.198,.537,.247,.807,.127,.27-.121,.444-.389,.444-.685v-2.973c4.296,.318,6.547,3.285,6.645,3.416,.144,.196,.371,.307,.605,.307,.078,0,.157-.012,.233-.037,.308-.101,.517-.389,.517-.713,0-.083-.095-8.006-8-8.478Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareLeft3;
