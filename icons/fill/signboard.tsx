import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Signboard({
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
          d="M16.979,15.075L13.979,2.575c-.081-.337-.383-.575-.729-.575H4.774s-.007,.002-.011,.002c-.005,0-.009-.002-.013-.002-.347,0-.648,.238-.729,.575L1.021,15.075c-.097,.402,.151,.808,.555,.904,.399,.097,.808-.15,.904-.555l.582-2.425h1.189c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-.829l1.329-5.536,2.271,9.461c.083,.344,.39,.575,.729,.575,.059,0,.117-.006,.176-.021,.403-.097,.651-.502,.555-.904l-.498-2.075h6.957l.582,2.425c.083,.344,.39,.575,.729,.575,.059,0,.117-.006,.176-.021,.403-.097,.651-.502,.555-.904Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Signboard;
