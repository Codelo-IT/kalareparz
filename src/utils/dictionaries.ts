import { EnumDictionary, ExhibitorColor } from "utils/types/util.types";
import { WhyUsTabsIndexes } from "components/WhyUs/WhyUs";

export const whyUsIndexToSvgDictionary: EnumDictionary<WhyUsTabsIndexes, string> = {
    0: '<svg id="fi_11351662" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m56.564 50.141c.141.074.294.11.447.11.199 0 .397-.061.564-.184.296-.215.444-.579.382-.939l-1.254-7.309 5.31-5.177c.262-.255.356-.636.243-.984-.113-.347-.414-.601-.775-.654l-7.339-1.066-3.282-6.65c-.161-.327-.495-.535-.86-.535s-.699.207-.86.535l-3.283 6.65-7.338 1.066c-.361.052-.662.306-.775.654-.112.347-.019.729.243.984l5.31 5.177-1.254 7.309c-.062.36.086.724.382.939.297.217.689.244 1.011.074l6.564-3.45zm-12.3-2.604 1.01-5.889c.053-.311-.05-.629-.276-.85l-4.279-4.172 5.913-.859c.312-.045.583-.241.722-.525l2.646-5.359 2.645 5.359c.139.284.41.48.722.525l5.913.859-4.279 4.172c-.226.221-.329.539-.276.85l1.01 5.889-5.289-2.781c-.14-.074-.293-.11-.447-.11s-.307.036-.447.11z"></path><path d="m71.798 38.503c0-12.021-9.778-21.799-21.798-21.799s-21.798 9.778-21.798 21.799c0 12.019 9.778 21.798 21.798 21.798s21.798-9.779 21.798-21.798zm-41.677 0c0-10.962 8.917-19.879 19.879-19.879s19.879 8.917 19.879 19.879c0 10.961-8.917 19.878-19.879 19.878s-19.879-8.917-19.879-19.878z"></path><path d="m65.367 60.145c.423-.116.911-.192 1.399-.26 1.167-.162 2.491-.347 3.379-1.236.888-.887 1.073-2.211 1.236-3.377.112-.804.228-1.635.551-2.116.317-.472 1.037-.892 1.732-1.299 1.023-.597 2.182-1.275 2.669-2.445.478-1.151.144-2.438-.151-3.573-.205-.791-.417-1.61-.302-2.188.107-.545.605-1.2 1.085-1.833.721-.951 1.537-2.028 1.537-3.314s-.817-2.363-1.537-3.314c-.481-.634-.978-1.289-1.085-1.833-.116-.579.097-1.397.302-2.188.294-1.135.628-2.422.15-3.572-.486-1.171-1.646-1.848-2.67-2.446-.695-.406-1.414-.825-1.731-1.299-.322-.481-.438-1.311-.551-2.115-.162-1.167-.347-2.49-1.235-3.378-.888-.887-2.211-1.072-3.378-1.235-.804-.112-1.635-.229-2.115-.551-.473-.317-.893-1.036-1.299-1.731-.597-1.024-1.274-2.185-2.445-2.671-1.151-.477-2.437-.144-3.574.15-.792.206-1.612.416-2.188.304-.544-.109-1.2-.605-1.833-1.086-.95-.722-2.027-1.539-3.313-1.539s-2.363.817-3.314 1.537c-.634.481-1.289.977-1.833 1.086-.582.112-1.397-.097-2.188-.304-1.135-.295-2.424-.627-3.573-.15-1.17.486-1.847 1.646-2.445 2.67-.406.695-.825 1.414-1.299 1.731-.481.322-1.312.439-2.116.551-1.167.162-2.49.347-3.378 1.235-.889.889-1.073 2.211-1.235 3.378-.112.804-.228 1.633-.551 2.115-.317.474-1.036.894-1.731 1.299-1.024.597-2.183 1.275-2.67 2.446-.478 1.15-.144 2.437.15 3.572.206.791.418 1.61.302 2.19-.107.544-.604 1.2-1.085 1.833-.721.95-1.538 2.028-1.538 3.314s.817 2.363 1.537 3.313c.481.634.977 1.29 1.085 1.833.115.58-.097 1.399-.302 2.19-.294 1.135-.629 2.422-.151 3.572.487 1.171 1.647 1.848 2.67 2.446.695.405 1.414.825 1.731 1.299.322.48.438 1.311.55 2.113.163 1.167.347 2.491 1.236 3.379.888.887 2.21 1.072 3.378 1.235.488.068.977.144 1.401.261l-12.43 21.531c-.202.349-.164.786.095 1.096.257.309.681.42 1.062.287l8.951-3.224 1.681 9.376c.071.396.382.706.78.776.057.009.112.014.167.014.339 0 .658-.18.831-.48l13.113-22.722c.356.126.727.208 1.119.208s.763-.082 1.118-.208l13.114 22.722c.173.3.492.48.831.48.054 0 .11-.005.165-.014.397-.07.709-.38.78-.777l1.68-9.375 8.951 3.224c.383.134.804.022 1.062-.287.259-.31.297-.747.095-1.096zm-29.949 26.141-1.418-7.91c-.05-.277-.22-.52-.465-.661-.244-.141-.541-.167-.806-.072l-7.553 2.721 10.974-19.008c.169.258.334.532.496.81.597 1.024 1.274 2.183 2.445 2.67 1.152.479 2.437.144 3.572-.15.792-.205 1.612-.417 2.19-.302.544.109 1.2.605 1.834 1.086.169.128.344.259.522.388zm13.558-21.555c-.003-.002-.004-.004-.007-.006-.004-.002-.008-.002-.012-.004-.364-.216-.741-.501-1.111-.782-.807-.612-1.642-1.245-2.62-1.439-.247-.05-.496-.07-.746-.07-.769 0-1.545.2-2.3.396-.884.23-1.799.464-2.353.236-.575-.239-1.058-1.066-1.524-1.865-.516-.882-1.049-1.796-1.888-2.358-.847-.569-1.9-.715-2.919-.857-.91-.127-1.852-.259-2.285-.691-.433-.434-.565-1.376-.692-2.287-.142-1.019-.289-2.071-.857-2.918-.563-.839-1.475-1.372-2.358-1.887-.799-.466-1.626-.95-1.865-1.525-.23-.554.007-1.469.237-2.352.259-1.001.527-2.035.327-3.046-.195-.977-.827-1.812-1.439-2.62-.564-.744-1.147-1.514-1.147-2.153 0-.641.584-1.411 1.148-2.155.612-.807 1.244-1.642 1.439-2.618.201-1.011-.068-2.046-.327-3.047-.229-.884-.467-1.798-.236-2.352.239-.575 1.066-1.059 1.865-1.525.883-.515 1.795-1.049 2.358-1.887.568-.849.715-1.901.857-2.92.127-.911.259-1.852.692-2.286.433-.432 1.375-.564 2.286-.691 1.019-.142 2.072-.289 2.919-.857.84-.562 1.372-1.476 1.888-2.358.467-.799.949-1.626 1.524-1.865.553-.231 1.47.007 2.354.236 1 .26 2.033.527 3.045.327.977-.194 1.812-.826 2.618-1.439.743-.563 1.512-1.146 2.153-1.146s1.41.584 2.155 1.147c.807.612 1.641 1.245 2.619 1.439 1.014.199 2.045-.069 3.045-.327.884-.227 1.801-.464 2.354-.236.576.24 1.058 1.066 1.525 1.866.515.882 1.047 1.795 1.887 2.358.847.569 1.901.715 2.919.857.911.127 1.853.259 2.286.691.433.434.564 1.375.692 2.286.142 1.019.289 2.071.857 2.92.563.839 1.475 1.371 2.358 1.887.799.466 1.626.949 1.865 1.525.231.554-.007 1.469-.236 2.352-.259 1.001-.528 2.035-.327 3.046.194.977.827 1.811 1.439 2.618.564.745 1.148 1.515 1.148 2.155s-.584 1.41-1.148 2.155c-.612.807-1.244 1.641-1.439 2.618-.201 1.011.068 2.045.327 3.046.229.884.467 1.798.236 2.353-.239.575-1.065 1.057-1.865 1.524-.883.516-1.796 1.049-2.359 1.888-.568.847-.715 1.9-.857 2.918-.127.911-.259 1.852-.692 2.286-.434.434-1.376.565-2.288.692-1.017.142-2.069.289-2.917.856-.839.564-1.372 1.476-1.887 2.358-.467.8-.949 1.626-1.524 1.866-.552.23-1.468-.007-2.353-.236-1-.259-2.034-.525-3.045-.327-.978.194-1.813.826-2.62 1.439-.371.281-.747.566-1.111.782-.004.002-.008.002-.012.004-.003.002-.004.004-.007.006-.36.212-.707.355-1.023.355-.318-.001-.666-.144-1.026-.356zm18.294 12.911c-.267-.095-.561-.069-.805.072s-.415.384-.465.662l-1.417 7.909-11.792-20.428c.178-.129.353-.26.522-.388.634-.481 1.29-.977 1.834-1.086.58-.114 1.399.097 2.189.302 1.135.294 2.421.629 3.572.151 1.17-.486 1.848-1.646 2.445-2.67.162-.278.327-.553.496-.811l10.973 19.007z"></path></g></svg>',
    1: '<svg id="fi_11567355" height="512" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m43.143 21.207c0-3.334-2.712-6.046-6.046-6.046s-6.046 2.712-6.046 6.046 2.712 6.046 6.046 6.046c3.333.001 6.046-2.712 6.046-6.046zm-9.512 0c0-1.911 1.555-3.465 3.466-3.465s3.465 1.554 3.465 3.465-1.554 3.466-3.465 3.466-3.466-1.555-3.466-3.466z"></path><path d="m89.355 14.664c-.399-.231-.89-.231-1.29-.001l-25.162 14.505-14.623-8.433c-.25-5.96-5.163-10.735-11.183-10.735-6.021 0-10.934 4.775-11.184 10.735l-15.267 8.805c-.4.231-.646.657-.646 1.118v58.052c0 .461.246.886.645 1.117s.89.231 1.29.001l25.162-14.505 25.162 14.505c.2.115.422.173.645.173s.445-.057.645-.173l25.805-14.878c.4-.23.646-.656.646-1.117v-58.052c0-.461-.246-.887-.645-1.117zm-52.258-2.083c4.757 0 8.627 3.87 8.627 8.627 0 10.504-6.278 18.292-8.627 20.837-2.349-2.545-8.627-10.333-8.627-20.837 0-4.758 3.87-8.627 8.627-8.627zm50.322 60.506-24.516 14.133-25.162-14.505c-.399-.231-.89-.231-1.289 0l-23.871 13.761v-55.073l13.415-7.737c1.049 12.63 9.834 20.811 10.231 21.174.246.226.559.338.871.338s.624-.113.871-.338c.397-.363 9.181-8.544 10.23-21.174l14.061 8.11c.398.231.89.231 1.289 0l23.872-13.761v55.072z"></path><path d="m78.138 54.415c.219 0 .44-.055.643-.173l2.795-1.611c.617-.356.829-1.145.473-1.762-.357-.618-1.145-.83-1.762-.473l-2.795 1.611c-.617.356-.829 1.145-.473 1.762.238.414.673.646 1.119.646z"></path><path d="m69.762 59.244c.219 0 .44-.055.643-.173l4.187-2.414c.617-.356.829-1.145.473-1.762s-1.147-.831-1.762-.473l-4.187 2.414c-.617.356-.829 1.145-.473 1.762.239.415.673.646 1.119.646z"></path><path d="m60.629 59.25c-.618-.357-1.407-.145-1.762.473-.356.617-.144 1.406.473 1.762l2.794 1.612c.199.115.422.173.645.173s.445-.057.645-.173l2.795-1.612c.617-.356.829-1.145.473-1.762-.357-.618-1.147-.83-1.762-.473l-2.15 1.24z"></path><path d="m56.441 56.836-4.187-2.414c-.617-.358-1.406-.144-1.762.473s-.144 1.406.473 1.762l4.187 2.414c.203.117.425.173.643.173.446 0 .88-.231 1.119-.646.356-.617.144-1.406-.473-1.762z"></path><path d="m48.066 52.007-2.794-1.611c-.618-.357-1.408-.145-1.762.473-.356.617-.144 1.406.473 1.762l2.794 1.611c.203.117.425.173.643.173.446 0 .88-.231 1.119-.646.356-.617.144-1.406-.473-1.762z"></path><path d="m40.904 47.707c-.504-.504-1.321-.504-1.825 0l-1.983 1.983-1.983-1.983c-.504-.504-1.321-.504-1.825 0s-.504 1.321 0 1.825l1.983 1.983-1.983 1.983c-.504.504-.504 1.321 0 1.825.252.252.582.378.912.378s.66-.126.912-.378l1.983-1.983 1.983 1.983c.252.252.582.378.912.378s.66-.126.912-.378c.504-.504.504-1.321 0-1.825l-1.983-1.983 1.983-1.983c.506-.505.506-1.321.002-1.825z"></path></g></svg>',
    2: '<svg id="fi_10273344" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m45.1 58.3h.2c.6 0 1.1-.4 1.3-1 1.2-6 3.7-11.5 7.3-15.9 1.5-1.8 3.2-3.5 5.1-5 3.2-2.6 6.8-4.6 10.7-6 .7-.2 1-1 .8-1.6-.2-.7-1-1-1.6-.8-4.2 1.5-8 3.6-11.5 6.4-1.5 1.2-3 2.6-4.3 4.1-.6-1-1-2.1-1.2-3.3-.8-4 .3-9.3 4.9-11.2 1.7-.7 3.8-1 6.1-1.3 5.3-.7 12.4-1.6 20.5-8.6.1 5.4-1.2 18.3-15 28.5-3.1 2.3-7.3 2.4-10.9.3-.6-.4-1.4-.1-1.8.5s-.1 1.4.5 1.8c2.1 1.2 4.4 1.8 6.6 1.8 2.5 0 5-.8 7.1-2.3 18.9-13.9 15.9-33.3 15.9-33.5-.1-.5-.4-.9-.9-1s-1 0-1.3.3c-8.3 8.1-15.4 9-21 9.7-2.5.3-4.8.6-6.8 1.5-5 2.1-7.7 7.9-6.4 14.1.3 1.7 1 3.2 1.8 4.6.1.1.1.2.2.3-3.5 4.6-6 10.2-7.2 16.3-.2.5.2 1.2.9 1.3z"></path><path d="m26.2 45c1.6 1.2 3.5 1.7 5.4 1.7 1.2 0 2.5-.2 3.7-.7.7-.3 1-1 .7-1.7s-1-1-1.7-.7c-2.4.9-4.8.7-6.7-.7-9.6-7.1-11-15.9-11.1-20.2 5.9 4.9 11 5.5 14.9 6 1.7.2 3.2.4 4.5.9 2.8 1.2 3.7 4.1 3.6 6.5 0 1.2-.3 2.4-.9 3.5-.9-1-1.9-1.9-2.9-2.7-2.5-2.1-5.4-3.7-8.6-4.8-.7-.2-1.4.1-1.6.8s.1 1.4.8 1.6c2.9 1 5.6 2.5 7.9 4.4 1.4 1.1 2.6 2.3 3.7 3.7 1.3 1.5 2.5 3.4 3.5 5.4.2.5.7.7 1.2.7.2 0 .4 0 .6-.1.6-.3.9-1.1.6-1.7-1-1.9-2-3.6-3.2-5.2 1-1.6 1.6-3.5 1.6-5.5.2-4-1.9-7.5-5.2-8.9-1.6-.7-3.3-.9-5.2-1.1-4.2-.5-9.3-1.2-15.5-7.1-.3-.3-.8-.4-1.3-.3s-.8.5-.9 1c.1.5-2.1 14.7 12.1 25.2z"></path><path d="m65.7 68.2v-3.5c0-2.1-1.7-3.9-3.9-3.9h-33.3c-2.1 0-3.9 1.7-3.9 3.9v3.5c0 2.1 1.7 3.9 3.9 3.9h33.3c2.2 0 3.9-1.7 3.9-3.9zm-38.5 0v-3.5c0-.7.6-1.3 1.3-1.3h33.3c.7 0 1.3.6 1.3 1.3v3.5c0 .7-.6 1.3-1.3 1.3h-33.3c-.7 0-1.3-.5-1.3-1.3z"></path><path d="m58.3 75.8-1.9 10.6c-.1.6-.6 1.1-1.3 1.1h-19.9c-.6 0-1.2-.5-1.3-1.1l-1.8-10.6c-.1-.7-.8-1.2-1.5-1-.7.1-1.2.8-1 1.5l1.8 10.6c.3 1.9 1.9 3.2 3.8 3.2h19.9c1.9 0 3.5-1.3 3.8-3.2l1.9-10.6c.1-.7-.3-1.4-1-1.5-.7-.2-1.4.3-1.5 1z"></path></svg>',
};

export const whyUsIndexToTabName: EnumDictionary<WhyUsTabsIndexes, string> = {
    0: "Jakość",
    1: "Dostępność",
    2: "Świeżość",
};

export const exhibitorTailwindColorToHEX: EnumDictionary<ExhibitorColor, string> = {
    [ExhibitorColor.GREEN]: "#699969",
    [ExhibitorColor.YELLOW]: "#e0c372",
    [ExhibitorColor.ORANGE]: "#d66542",
};
