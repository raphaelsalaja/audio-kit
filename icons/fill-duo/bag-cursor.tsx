import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagCursor({
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
          d="m7.5,3c0-.8288.6712-1.5,1.5-1.5s1.5.6712,1.5,1.5v1h1.5v-1c0-1.6572-1.3428-3-3-3s-3,1.3428-3,3v1h1.5v-1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.1543,11.3984c-.3428-.9307-.1191-1.9492.584-2.6548.4824-.481,1.1162-.7446,1.7881-.7446.2979,0,.5918.0522.874.1562l4.2841,1.5649-.2789-3.2083h.001c-.125-1.4319-1.302-2.512-2.739-2.512h-7.334c-1.437,0-2.615,1.0801-2.739,2.512l-.652,7.5c-.067.7661.193,1.53.712,2.0969.519.5671,1.258.8921,2.027.8921h5.519l-2.0463-5.6025Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.8242,11.7334l-5.9404-2.1704h-.001c-.3799-.1396-.7949-.0469-1.082.2397-.2861.2871-.377.7017-.2373,1.0811l2.1699,5.9409c.1494.4062.5361.6753.9668.6753h.0225c.4395-.0098.8252-.2974.958-.7158l.7529-2.3506,2.3516-.7524c.4189-.1343.7061-.52.7148-.96s-.2637-.8369-.6758-.9878Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default BagCursor;
